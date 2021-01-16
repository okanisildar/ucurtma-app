import React, { useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SplashScreen from './splash-screen';
import ProblemSolution from './problem-and-solution';
import HowItWorks from './how-it-works';
import FeaturedCampaign from '../../ui/featured-campaign';
import Faq from './faq';
import DonatePage from './donate-page';
import LandingPageHeader from '../../ui/landing-page-header';

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.redirectedFromAuth) {
      document
        .querySelector('#landing-payment')
        .scrollIntoView({ behavior: 'smooth' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>Uçurtma Projesi</title>
      </Helmet>
      <Box mt="36px" width="full" bg="white" transition="0.2s ease all">
        <LandingPageHeader />
      </Box>
      <Flex id="splash-screen" mt={{ base: 84, lg: 126 }}>
        <SplashScreen />
      </Flex>
      <Box mt={165}>
        <FeaturedCampaign />
      </Box>
      <Flex id="problem-solution" mt={158} px={{ base: 4, lg: 0 }}>
        <ProblemSolution />
      </Flex>
      <Flex px={{ base: 4, lg: 0 }} mt="198px" id="how-it-works">
        <HowItWorks />
      </Flex>
      <Box mt="330px" mb={210}>
        <DonatePage />
      </Box>
      <Flex id="faq" mb={210} px={{ base: 4, lg: 0 }}>
        <Faq />
      </Flex>
    </>
  );
}

export default LandingPage;
