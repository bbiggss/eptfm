import React from 'react';

const RemoveRedirectedParam = () => {
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.has('redirected')) {
      params.delete('redirected');
      const newSearch = params.toString();
      const newPath = `${location.pathname}${newSearch ? `?${newSearch}` : ''}`;
      navigate(newPath, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default RemoveRedirectedParam;
