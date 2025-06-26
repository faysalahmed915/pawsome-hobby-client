import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import '@egjs/react-flicking/dist/flicking.css';
import Flicking from '@egjs/react-flicking';
import CardForCarousel from './CardForCarousel';
import { Link } from 'react-router';
// import axios from 'axios';

const GroupCarousel = () => {

    const axiosSecure = useAxiosSecure();
    const [groupsData, setGroupsData] = useState([]);
      const [panelsPerView, setPanelsPerView] = useState(1.2);

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const response = await axiosSecure.get('/createGroup');
                setGroupsData(response.data);
            } catch (error) {
                console.error('Error fetching groups:', error);
            }
        };

        fetchGroups();
    }, [axiosSecure]);

   useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setPanelsPerView(4);
      } else if (width >= 1024) {
        setPanelsPerView(3);
      } else if (width >= 640) {
        setPanelsPerView(2);
      } else {
        setPanelsPerView(1.2);
      }
    };

    handleResize(); // Initial set
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    console.log(groupsData);

    return (
        <div className='py-4'>
            <Flicking
                align="prev"
                circular={false}
                bounce={30}
                panelsPerView={panelsPerView}
                spacing={12}
            >
                {groupsData.map(group => (
                    <div key={group._id}>
                        <CardForCarousel group={group}></CardForCarousel>
                    </div>
                ))}
            </Flicking>
            <div className='w-full flex justify-center pt-4'>
                <Link className='btn btn-primary rounded-full'
            to='/groups'>
                See More
            </Link>
            </div>
        </div>
    );
};

export default GroupCarousel;