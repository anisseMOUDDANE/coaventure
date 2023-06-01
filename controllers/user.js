
exports.createUser= async (req, res) => {
	const { name, email, password } = req.body;
  
    // Vérification si l'utilisateur existe déjà par adresse e-mail
    User.findOne({ email })
      .then((existingUser) => {
        if (existingUser) {
          return res.status(409).json({ error: 'Un utilisateur avec cette adresse e-mail existe déjà.' });
        }
  
        // Hash du mot de passe
        bcrypt.hash(password, 10)
          .then((hashedPassword) => {
            // Création d'un nouvel utilisateur
            const newUser = new User({
              name,
              email,
              password: hashedPassword
            });
  
            // Sauvegarde de l'utilisateur dans la base de données
            newUser.save()
              .then(() => {
                res.json({ message: 'Inscription réussie.' });
              })
              .catch((error) => {
                res.status(500).json({ error: 'Une erreur est survenue lors de la sauvegarde de l\'utilisateur.' });
              });
          })
          .catch((error) => {
            res.status(500).json({ error: 'Une erreur est survenue lors du hachage du mot de passe.' });
          });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Une erreur est survenue lors de la recherche de l\'utilisateur existant.' });
      });
};
  
exports.loginUser= async (req, res) => {
	const { email, password } = req.body;

  // Recherche de l'utilisateur par adresse e-mail
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'Utilisateur non trouvé.' });
      }

      // Vérification du mot de passe
      bcrypt.compare(password, user.password)
        .then((isMatch) => {
          if (!isMatch) {
            return res.status(401).json({ error: 'Mot de passe incorrect.' });
          }

          // Authentification réussie
          res.json({ message: 'Connexion réussie.' });
        })
        .catch((error) => {
          res.status(500).json({ error: 'Une erreur est survenue lors de la comparaison des mots de passe.' });
        });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Une erreur est survenue lors de la recherche de l\'utilisateur.' });
    });
};
  