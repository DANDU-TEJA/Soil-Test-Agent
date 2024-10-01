// Register a new user
function registerUser(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('User registered:', userCredential.user);
        })
        .catch((error) => {
            console.error('Registration error:', error.message);
        });
}

// Log in an existing user
function loginUser(email, password) {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('User logged in:', userCredential.user);
        })
        .catch((error) => {
            console.error('Login error:', error.message);
        });
    }

    function loginAdmin() {
        const email = document.getElementById('admin-email').value;
        const password = document.getElementById('admin-password').value;
    
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log('Admin logged in');
                // Show Admin actions after login
                document.getElementById('admin-login').style.display = 'none';
                document.getElementById('admin-actions').style.display = 'block';
            })
            .catch((error) => {
                console.error('Login error:', error.message);
                alert('Login failed: ' + error.message);
            });
    }


    

    // Post Soil Details
function postSoilDetails(soilData) {
    db.collection('soil').add({
        details: soilData,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        console.log('Soil details added');
    })
    .catch((error) => {
        console.error('Error posting soil details:', error);
    });
}

// Post Distributor Details
function postDistributorDetails(distributorData) {
    db.collection('distributors').add({
        details: distributorData,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        console.log('Distributor details added');
    })
    .catch((error) => {
        console.error('Error posting distributor details:', error);
    });
}



// View Sand Details
function viewSandDetails() {
    db.collection('soil').get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            console.log(doc.data());
        });
    });
}

// View Distributor Details
function viewDistributorDetails() {
    db.collection('distributors').get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            console.log(doc.data());
        });
    });
}
