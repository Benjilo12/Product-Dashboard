Setup instructions (how to run it locally)
## Setup Instructions  
### Steps  
1. **Clone the repository:**  
   ```bash
    https://github.com/Benjilo12/Product-Dashboard.git
   
2. **Install dependencies:**
    ```bash
   npm install

 3. **To go into that folder so you can run the project, you run:**
     ```bash
     cd product-system

  4. **Run the Vite dev server:**
     ```bash
     npm run dev


///-----------------------------------------Any assumptions or decisions made----------------------------------------------------------

***Vite***
* Chosen for its fast development experience, modern ESM-based architecture, and out-of-the-box support for React/TypeScript.
* Enables rapid prototyping with hot module replacement (HMR) and optimized production builds.
* Easy to configure with plugins, like React, Tailwind, or PWA support.

***Tailwind CSS***
* Used for utility-first styling to ensure a lightweight, customizable design system.
* Combined with MUI to streamline component-specific styles (e.g., tables, modals) while retaining flexibility.
* Used to also make the dashboard responsive

***Material-UI (MUI)***
* Adopted as the core UI library for pre-built, accessible components (e.g., tables, modals, buttons).
* Ensures consistency and accelerates development with Material Design principles.
* MUI’s DataGrid or Table components render the product dashboard.

***React Toast Notifications***
* Used toast messages for actions like successful creation, update, or deletion of a product

***React Context API**
* Used Context API for state management because it's lightweight and easy to understand, also good for shared global state

***React Query***
* Implemented for server-state management to handle data fetching, caching, and synchronization.
* Simplifies API integration (e.g., fetching/updating products) and reduces boilerplate code.
* Paired with MUI’s loading states and error handling for a seamless user experience.

***LocalStorage***
* Used localStorage to persist favorite products.

***MUI + React Query Integration***
* MUI components (e.g., modals, alerts) are used for CRUD operations, while React Query manages the data layer.
* Example: The "ADD PRODUCT" modal (MUI Dialog) triggers React Query mutations to update the backend.



//----------------------------------------------Navigation Flow----------------------------------------------------

-- Search: Enter a product name in the "Search by name" field to search for a product.

-- Filter: Select a category from the "All Categories" dropdown to filter products.

-- Add Product: Click "ADD PRODUCT," which navigates to a modal form to add a product.

--Sort Product: When you hover over the price column header, an arrow appears beside the header, which allows you to sort by price (Low → High, High → Low)

--Favourite mark/unmark product: The star icon allows you to  mark the product as a favourite.  

--Actions: 
* The first eye icon, when clicked, opens a modal that allows you to see product details
* The second icon, which is the pencil icon, when clicked, opens a modal that allows you to edit a product.
* The third icon, which is the trash icon, when clicked, deletes a product.

--Pagination:  
* Use the MUI Pagination component at the bottom of the table to:  
* Navigate between pages using the **Previous/Next** buttons.  
* Jump to a specific page by clicking a page number.  
* Adjust rows per page using the dropdown (e.g., 5, 10).  
* The table dynamically updates to show the selected page.


//-----------------------------------------------What you'd improve with more time---------------------------------------


**Authentication & Authorization**  
   - Add login/logout functionality for the **Profile** and **Settings** sections.  
   - Role-based access control (e.g., admins vs. regular users).  

. **Enhanced UI/UX**  
   - **Dark Mode**: Implement theme switching using MUI’s theming system.  
   - **Animations**: Add subtle transitions for modal openings and row updates.

     **Analytics & Insights**    
     - Add interactive charts (e.g., bar/pie/line graphs) to visualize:  
       - Product distribution by category.  
       - Price range analysis.    
     - Use libraries like **Recharts** or **Victory** for seamless integration with React and MUI.
       
   - **Real-Time Metrics**:   
     - Display monthly/yearly summaries in a dedicated analytics tab.
    
     **Client-Side Routing**  
   - **React Router Integration**:  
     - Implement seamless navigation between pages (e.g., Dashboard, Profile, Settings) using `react-router-dom`.  
     - Ensure deep linking support for direct access to specific views (e.g., `/products`, `/settings`).
        
   - **Dynamic Layouts**:  
     - Preserve shared UI elements (e.g., sidebar, header) across routes for a consistent user experience.
      
   - **Lazy Loading**:  
     - Split code by route to reduce initial load time (e.g., `React.lazy` + `Suspense`).  
   - **Protected Routes**:  
     - Restrict access to sensitive pages (e.g., Settings) to authenticated users only.  

 

 
   

