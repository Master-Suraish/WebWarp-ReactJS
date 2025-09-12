# Blood Donation Finder App

- A web-based application that helps people find blood donors in emergency situations.
- Users can register as donors and others can search for donors based on blood group and city.

## Features

- Donor Registration – A form where users can register their name, city, blood group, and contact.
- Donor List – Display all available donors in a list/card format.
- Search & Filter – Search donors by city or blood group.
- Donor Details – A detail page for each donor with complete information.
- Routing – Navigation between Home, Add Donor, and Donor Detail pages.
- Error & Loading States – If no donor is found, show a message; if data is loading, show a loading indicator.

## React Topics Covered

- Components → DonorForm, DonorList, DonorCard, DonorDetail, Navbar.
- State → To manage form inputs, donors list, and search queries.
- Props → Passing donor data from parent to child components.
- Form → For donor registration and search functionality.
- API Fetch → To fetch and store donor data using a mock API.
- Conditional Rendering → Show messages for "No Donor Found" or "Loading".
- List with Map (Keys) → Displaying donors in a list using .map().
- useEffect → Fetch donor data from API when the app loads.
- Routing → Home (Donor List), Add Donor (Form), Donor Detail page.

## Why this Project?

- Real-life Problem Solving → Helps people quickly find blood donors during emergencies.
- Practical Use Case → Can be implemented in communities, universities, or hospitals.
