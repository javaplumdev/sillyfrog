const useScreenDectector = () => {
  const [width, setWidth] = React.useState<number>(window.innerWidth);

  const handleWindowSizeChange = () => setWidth(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile: boolean = width <= 768;
  const isTablet: boolean = width <= 1024;
  const isDesktop: boolean = width > 1024;

  return { isMobile, isTablet, isDesktop };
};
