// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
// import { collection, addDoc } from 'firebase/firestore';
// import { db } from './firebase'; // Ensure the path is correct

// const FarmersForm = () => {
//   const [ownershipType, setOwnershipType] = useState('');
//   const [farmBusinessName, setFarmBusinessName] = useState('');
//   const [contactFirstName, setContactFirstName] = useState('');
//   const [contactLastName, setContactLastName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [productDescription, setProductDescription] = useState('');
//   const [submitted, setSubmitted] = useState(false); // State for confirmation message
//   const [error, setError] = useState(''); // State for error message

//   const handleOwnershipTypeChange = (e) => setOwnershipType(e.target.value);
//   const handleFarmBusinessNameChange = (e) => setFarmBusinessName(e.target.value);
//   const handleContactFirstNameChange = (e) => setContactFirstName(e.target.value);
//   const handleContactLastNameChange = (e) => setContactLastName(e.target.value);
//   const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
//   const handleProductDescriptionChange = (e) => setProductDescription(e.target.value);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await addDoc(collection(db, "farmers"), {
//         ownershipType,
//         farmBusinessName,
//         contactFirstName,
//         contactLastName,
//         phoneNumber,
//         productDescription,
//       });

//       console.log('Farm Vendor Form Submitted:', {
//         ownershipType,
//         farmBusinessName,
//         contactFirstName,
//         contactLastName,
//         phoneNumber,
//         productDescription,
//       });

//       // Clear form and set submitted state
//       setOwnershipType('');
//       setFarmBusinessName('');
//       setContactFirstName('');
//       setContactLastName('');
//       setPhoneNumber('');
//       setProductDescription('');
//       setSubmitted(true);
//       setError('');

//     } catch (e) {
//       console.error('Error adding document: ', e);
//       setError(`Error submitting the form: ${e.message}`); // Provide specific error message
//     }
//   };

//   return (
//     <Box sx={{ p: 4, maxWidth: '600px', margin: 'auto', backgroundColor: '#f0f5d3', borderRadius: '8px' }}>
//       <Typography variant="h4" gutterBottom textAlign="center">
//         Farm Vendors Registration Form
//       </Typography>
//       <img src="https://ethical.net/wp-content/uploads/2020/02/shelley-pauls-kuR1Kwo4my4-unsplash-1024x706.jpg" alt="Farmers Market" style={{ width: '100%', borderRadius: '8px' }} />
//       {submitted ? (
//         <Typography variant="h6" color="green" textAlign="center">
//           Your form has been submitted successfully!
//         </Typography>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           {error && (
//             <Typography variant="h6" color="red" textAlign="center">
//               {error}
//             </Typography>
//           )}
//           <FormControl fullWidth margin="normal">
//             <InputLabel>Ownership Type</InputLabel>
//             <Select value={ownershipType} onChange={handleOwnershipTypeChange} required>
//               <MenuItem value=""><em>Please select</em></MenuItem>
//               <MenuItem value="Sole Proprietorship">Sole Proprietorship</MenuItem>
//               <MenuItem value="Partnership">Partnership</MenuItem>
//               <MenuItem value="Corporation">Corporation</MenuItem>
//               <MenuItem value="Cooperative">Cooperative</MenuItem>
//             </Select>
//           </FormControl>
//           <TextField
//             label="Farm Business Name & ID"
//             value={farmBusinessName}
//             onChange={handleFarmBusinessNameChange}
//             fullWidth
//             required
//             margin="normal"
//           />
//           <Box sx={{ display: 'flex', gap: 2 }}>
//             <TextField
//               label="First"
//               value={contactFirstName}
//               onChange={handleContactFirstNameChange}
//               fullWidth
//               required
//               margin="normal"
//             />
//             <TextField
//               label="Last"
//               value={contactLastName}
//               onChange={handleContactLastNameChange}
//               fullWidth
//               required
//               margin="normal"
//             />
//           </Box>
//           <TextField
//             label="Phone Number"
//             value={phoneNumber}
//             onChange={handlePhoneNumberChange}
//             fullWidth
//             required
//             margin="normal"
//           />
//           <TextField
//             label="Give a brief description of your products"
//             value={productDescription}
//             onChange={handleProductDescriptionChange}
//             fullWidth
//             required
//             margin="normal"
//             multiline
//             rows={4}
//           />
//           <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
//             Submit
//           </Button>
//         </form>
//       )}
//     </Box>
//   );
// };

// export default FarmersForm;


import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase'; // Ensure the path is correct
import ReCAPTCHA from 'react-google-recaptcha';

const FarmersForm = () => {
  const [date, setDate] = useState('');
  const [ownershipType, setOwnershipType] = useState('');
  const [farmBusinessName, setFarmBusinessName] = useState('');
  const [contactFirstName, setContactFirstName] = useState('');
  const [contactLastName, setContactLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      setError("Please complete the reCAPTCHA.");
      return;
    }

    try {
      await addDoc(collection(db, "agriculture_association_members"), {
        date,
        ownershipType,
        farmBusinessName,
        contactFirstName,
        contactLastName,
        phoneNumber,
        productDescription,
        captchaToken,
      });

      console.log('Form Submitted:', {
        date,
        ownershipType,
        farmBusinessName,
        contactFirstName,
        contactLastName,
        phoneNumber,
        productDescription,
        captchaToken,
      });

      // Clear form and set submitted state
      setDate('');
      setOwnershipType('');
      setFarmBusinessName('');
      setContactFirstName('');
      setContactLastName('');
      setPhoneNumber('');
      setProductDescription('');
      setCaptchaToken(null); // Reset captcha token
      setSubmitted(true);
      setError('');

    } catch (e) {
      console.error('Error adding document: ', e);
      setError(`Error submitting the form: ${e.message}`);
    }
  };

  return (
    <Box sx={{ p: 4, maxWidth: '600px', margin: 'auto', backgroundColor: '#f0f5d3', borderRadius: '8px' }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Agriculture Association Membership Form
      </Typography>
      {submitted ? (
        <Typography variant="h6" color="green" textAlign="center">
          Your form has been submitted successfully!
        </Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && (
            <Typography variant="h6" color="red" textAlign="center">
              {error}
            </Typography>
          )}
          <TextField
            label="Today's Date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            required
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl fullWidth required margin="normal">
            <InputLabel id="ownership-type-label">Ownership Type</InputLabel>
            <Select
              labelId="ownership-type-label"
              value={ownershipType}
              onChange={(e) => setOwnershipType(e.target.value)}
              displayEmpty
            >
              <MenuItem value="" disabled>Select Ownership Type</MenuItem>
              <MenuItem value="Individual">Individual</MenuItem>
              <MenuItem value="Partnership">Partnership</MenuItem>
              <MenuItem value="Corporation">Corporation</MenuItem>
              <MenuItem value="Cooperative">Cooperative</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Farm Business Name & ID"
            value={farmBusinessName}
            onChange={(e) => setFarmBusinessName(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label="First"
              value={contactFirstName}
              onChange={(e) => setContactFirstName(e.target.value)}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Last"
              value={contactLastName}
              onChange={(e) => setContactLastName(e.target.value)}
              fullWidth
              required
              margin="normal"
            />
          </Box>
          <TextField
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Give a brief description of your products"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            fullWidth
            required
            margin="normal"
            multiline
            rows={4}
          />
          <ReCAPTCHA
            sitekey="6Lc-eiIqAAAAAK-7RElTN_Gu0BDMNrRHZ12Zakla" // Replace with your actual site key
            onChange={handleCaptchaChange}
            style={{ marginTop: '16px' }}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit Form
          </Button>
        </form>
      )}
    </Box>
  );
};

export default FarmersForm;
