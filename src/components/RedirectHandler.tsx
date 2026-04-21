import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * RedirectHandler
 * Handles the "SPA for GitHub Pages" redirect hack.
 * If the URL contains a path in the query string (e.g., /?/blog/123),
 * it converts it back to a clean path and navigates to it.
 */
export const RedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const search = location.search;
    
    // Check if the query string starts with '?' followed by a '/'
    if (search && search.startsWith('?/')) {
      // Extract the path from the query string
      // Example: ?/blog/2026-04-18/ -> /blog/2026-04-18/
      let path = search.slice(1); // Remove the leading '?'
      
      // Replace ~and~ back with & if there were multiple parameters
      path = path.replace(/~and~/g, '&');
      
      console.log('RedirectHandler: Redirecting from query path to:', path);
      
      // Navigate to the clean path and replace the current entry in the history
      navigate(path, { replace: true });
    }
  }, [location, navigate]);

  return null;
};
