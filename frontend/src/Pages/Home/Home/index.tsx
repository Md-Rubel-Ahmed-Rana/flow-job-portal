import React from 'react';
import Banner from '../Banner';
import JobTopics from '../JobTopics';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const Home = () => {
    return (
        <>
          <Banner />
          <JobTopics />
          <ServiceInfo />
        </>
    );
};

export default Home;