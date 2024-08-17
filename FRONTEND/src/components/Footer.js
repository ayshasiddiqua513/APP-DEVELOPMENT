// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Modal, TextField, Snackbar, Alert, Button } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import './Footer.css'; // Import your CSS styles

// function Footer() {
//   const [open, setOpen] = useState(false);
//   const [email, setEmail] = useState('');
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     setOpen(false);
//   }, [location]);

//   const handleOpen = () => setOpen(true);

//   const handleClose = () => setOpen(false);

//   const handleSubscribe = () => {
//     if (email) {
//       localStorage.setItem('subscribedEmail', email);
//       setShowConfirmation(true);
//       setOpen(false);
//     } else {
//       alert('Please enter a valid email address.');
//     }
//   };

//   const handleCloseSnackbar = () => setShowConfirmation(false);

//   return (
//     <>
//       <footer className="footer" id="footer">
//         <div className="footer-section contact-us">
//           <Typography variant="h4" component="h4" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="footer-heading">
//             Contact Us
//           </Typography>
//           <Typography sx={{ fontSize: '1rem', mb: 1 }}>
//             Our motto is to create sustainable and self-supportive communities.
//           </Typography>
//           <Typography sx={{ fontSize: '1rem', mb: 1 }}>
//             Gayatri Nagar – 5th Lane, Rayagada, Odisha, India Pin code – 765001
//           </Typography>
//           <Typography sx={{ fontSize: '1rem', mb: 1 }}>+91 685-635-8710</Typography>
//           <Typography sx={{ fontSize: '1rem', mb: 1 }}>
//             <a href="mailto:info@mgsindia.org">info@mgsindia.org</a>
//           </Typography>
//           <Typography sx={{ fontSize: '1rem' }}>
//             <a href="https://facebook.com">Facebook</a>
//           </Typography>
//         </div>

//         <div className="footer-section useful-links">
//           <Typography variant="h4" component="h4" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
//             Useful Links
//           </Typography>
//           <ul>
//             <li><a href="#">About Us</a></li>
//             <li><a href="#">Our Works</a></li>
//             <li><a href="#">Blog</a></li>
//             <li><a href="#">Gallery</a></li>
//             <li><a href="#">Annual Reports</a></li>
//             <li><a href="#">Contact Us</a></li>
//             <li><a href="#">Terms & Conditions</a></li>
//             <li><a href="#">Privacy Policy</a></li>
//           </ul>
//         </div>

//         <div className="footer-section recent-news">
//           <Typography variant="h4" component="h4" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
//             Recent News
//           </Typography>
//           <ul>
//             <li><a href="#">Cheers to Nandabadi Asha Group!<br /><span>June 19, 2023</span></a></li>
//             <li><a href="#">Victory Celebration!<br /><span>June 12, 2023</span></a></li>
//             <li><a href="#">Graduation Ceremony Ghodabadi<br /><span>November 29, 2022</span></a></li>
//           </ul>
//         </div>

//         <div className="footer-section gallery">
//           <Typography variant="h4" component="h4" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
//             Gallery
//           </Typography>
//           <div className="gallery-images">
//             <img src="p1.jpg" alt="Gallery Image 1" />
//             <img src="p2.jpg" alt="Gallery Image 2" />
//             <img src="p3.jpg" alt="Gallery Image 3" />
//             <img src="p4.jpg" alt="Gallery Image 4" />
//             <img src="p5.jpg" alt="Gallery Image 5" />
//             <img src="p6.jpg" alt="Gallery Image 6" />
//             <img src="p7.jpg" alt="Gallery Image 7" />
//             <img src="p8.jpg" alt="Gallery Image 8" />
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <Typography sx={{ fontSize: '0.875rem' }}>
//             Ministry of Good Samaritan is a nonprofit organization. PAN : AACTM3843K
//           </Typography>
//           <Typography sx={{ fontSize: '0.875rem' }}>
//             Copyright © 2024 Smart Harvest. All Rights Reserved.
//           </Typography>
//           <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mt: 2, backgroundColor: '#4CAF50', color: 'white' }}>
//             Subscribe to Our Newsletter
//           </Button>
//         </div>
//       </footer>

//       <Modal open={open} onClose={handleClose}>
//         <Box 
//           display="flex"
//           flexDirection="column"
//           justifyContent="center"
//           alignItems="center"
//           position="absolute"
//           top="10%"
//           left="50%"
//           transform="translate(-50%, -10%)"
//           bgcolor="background.paper"
//           p={4}
//           boxShadow={24}
//           maxWidth={400}
//           width="100%"
//         >
//           <Typography variant="h6" gutterBottom sx={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
//             Subscribe to Our Newsletter
//           </Typography>
//           <Typography variant="body1" paragraph sx={{ fontSize: '1rem' }}>
//             Kindly subscribe for updates on our latest news, products, and events.
//           </Typography>
//           <TextField
//             label="Email"
//             variant="outlined"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             fullWidth
//             margin="normal"
//           />
//           <Button variant="contained" color="primary" onClick={handleSubscribe} fullWidth >
//             Subscribe
//           </Button>
//           <Box mt={2} display="flex" justifyContent="space-between" width="100%">
//             <Button onClick={handleClose} color="secondary">I don't want to subscribe</Button>
//             <Button onClick={handleClose} color="secondary">Remind me later</Button>
//           </Box>
//         </Box>
//       </Modal>

//       <Snackbar 
//         open={showConfirmation} 
//         autoHideDuration={6000} 
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//       >
//         <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
//           You have successfully subscribed!
//         </Alert>
//       </Snackbar>
//     </>
//   );
// }

// export default Footer;



import React, { useState, useEffect } from 'react';
import { Box, Typography, Modal, TextField, Snackbar, Alert, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './Footer.css'; // Import your CSS styles

function Footer() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleSubscribe = () => {
    if (email) {
      axios.post('http://localhost:5000/subscriptions', { email })
        .then(() => {
          setShowConfirmation(true);
          setOpen(false);
          setEmail('');
        })
        .catch((error) => {
          console.error('Error subscribing:', error);
        });
    } else {
      alert('Please enter a valid email address.');
    }
  };

  const handleCloseSnackbar = () => setShowConfirmation(false);

  return (
    <>
      <footer className="footer" id="footer">
         <div className="footer-section contact-us">
           <Typography variant="h4" component="h4" sx={{ fontSize: '1.5rem', fontWeight: 'bold', color:'black' }} className="footer-heading">
             Contact Us
           </Typography>
           <Typography sx={{ fontSize: '1rem', mb: 1, color:'black' }}>
             Our motto is to create sustainable and self-supportive communities.
           </Typography>
           <Typography sx={{ fontSize: '1rem', mb: 1, color:'black' }}>
             Gayatri Nagar – 5th Lane, Rayagada, Odisha, India Pin code – 765001
           </Typography>
           <Typography sx={{ fontSize: '1rem', mb: 1, color:'black' }}>+91 685-635-8710</Typography>
           <Typography sx={{ fontSize: '1rem', mb: 1, color:'black' }}>
             <a href="mailto:info@mgsindia.org">info@mgsindia.org</a>
           </Typography>
           <Typography sx={{ fontSize: '1rem' }}>
             <a href="https://facebook.com">Facebook</a>
           </Typography>
         </div>
         <div className="footer-section useful-links">
           <Typography variant="h4" component="h4" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
             Useful Links
           </Typography>
           <ul>
             <li><a href="#">About Us</a></li>
             <li><a href="#">Our Works</a></li>
             <li><a href="#">Blog</a></li>
             <li><a href="#">Gallery</a></li>
             <li><a href="#">Annual Reports</a></li>
             <li><a href="#">Contact Us</a></li>
             <li><a href="#">Terms & Conditions</a></li>
             <li><a href="#">Privacy Policy</a></li>
           </ul>
         </div>
         <div className="footer-section recent-news">
           <Typography variant="h4" component="h4" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
             Recent News
           </Typography>
           <ul>
             <li><a href="#">Cheers to Nandabadi Asha Group!<br /><span>June 19, 2023</span></a></li>
             <li><a href="#">Victory Celebration!<br /><span>June 12, 2023</span></a></li>
             <li><a href="#">Graduation Ceremony Ghodabadi<br /><span>November 29, 2022</span></a></li>
           </ul>
         </div>
         <div className="footer-section gallery">
           <Typography variant="h4" component="h4" sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
             Gallery
           </Typography>
           <div className="gallery-images">
             <img src="p1.jpg" alt="Gallery Image 1" />
             <img src="p2.jpg" alt="Gallery Image 2" />
             <img src="p3.jpg" alt="Gallery Image 3" />
             <img src="p4.jpg" alt="Gallery Image 4" />
             <img src="p5.jpg" alt="Gallery Image 5" />
             <img src="p6.jpg" alt="Gallery Image 6" />
             <img src="p7.jpg" alt="Gallery Image 7" />
             <img src="p8.jpg" alt="Gallery Image 8" />
           </div>
         </div>
        <div className="footer-bottom">
          <Typography sx={{ fontSize: '0.9rem', color:'black' }}>
            Ministry of Good Samaritan is a nonprofit organization. PAN : AACTM3843K
          </Typography>
          <Typography sx={{ fontSize: '0.9rem', color:'black' }}>
            Copyright © 2024 Smart Harvest. All Rights Reserved.
          </Typography>
          <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mt: 2, backgroundColor: 'black', color: 'white' }}>
            Subscribe to Our Newsletter
          </Button>
        </div>
      </footer>

      <Modal open={open} onClose={handleClose}>
        <Box 
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="10%"
          left="50%"
          transform="translate(-50%, -10%)"
          bgcolor="background.paper"
          p={4}
          boxShadow={24}
          maxWidth={400}
          width="100%"
        >
          <Typography variant="h6" gutterBottom sx={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
            Subscribe to Our Newsletter
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1rem' }}>
            Kindly subscribe for updates on our latest news, products, and events.
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleSubscribe} fullWidth sx={{ mt: 2, backgroundColor: '#4CAF50', color: 'white' }}>
            Subscribe
          </Button>
          <Box mt={2} display="flex" justifyContent="space-between" width="100%">
            <Button onClick={handleClose} color="secondary">I don't want to subscribe</Button>
            <Button onClick={handleClose} color="secondary">Remind me later</Button>
          </Box>
        </Box>
      </Modal>

      <Snackbar 
        open={showConfirmation} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          You have successfully subscribed!
        </Alert>
      </Snackbar>
    </>
  );
}

export default Footer;
