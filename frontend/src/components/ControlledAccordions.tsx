import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImgMediaCard from './ImgMediaCard';
import PaginationControlled from './PaginationControlled'
import { useState, useEffect } from 'react';

type ItemData = {
    Name: string;
    ['Services']: string;
    ['Address 1']: string;
    ['Address 2']: string;
    ['Contact Number 1']: string;
    ['Contact Number 2']: string;
    ['Contact Persons']: string;
    ['Hours']: string;
    ['Email Address 1']: string;
    ['Email Address 2']: string;
    Website: string;
    Latitude: number;
    Longitude: number;
};

const filterServices = (services: string[], maxLength: number) => {
    return services.filter(
        (service) => service.trim().length > 0 && service.trim().length <= maxLength
    );
};

const ITEMS_PER_PAGE = 3;

type ControlledAccordionsProps = {
    data: ItemData[];
    setPinLocation: React.Dispatch<React.SetStateAction<[number, number]>>;
    setIsResultsPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ControlledAccordions: React.FC<ControlledAccordionsProps> = ({ data, setPinLocation, setIsResultsPanelOpen, setIsDrawerOpen }) => {
    const [expanded, setExpanded] = useState<string | false>(false);
    const [currentPage, setCurrentPage] = useState(1);

    const handleChange = (panel: string) => (
        event: React.SyntheticEvent,
        isExpanded: boolean
    ) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handlePageChange = (page: number) => {
        setExpanded(false);
        setCurrentPage(page);
    };

    let currentData = data.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const accordionStyles = `
    /* Styling for the accordion summary */
    .smooth-summary {
      transition: background-color 0.3s ease-in-out;
    }

    /* Styling for the expanded accordion summary */
    .smooth-summary.Mui-expanded {
      background-color: #f5f5f5; /* Change to the desired color for expanded state */
    }

    /* Styling for the accordion details */
    .smooth-details {
      display: flex;
      flex-direction: column;
      gap: 16px;
      transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
    }

    /* Styling for the expanded accordion details */
    .smooth-details.Mui-expanded {
      opacity: 1;
      max-height: 1000px; /* Change to the desired max height for expanded state */
    }
  `;

    return (
        <div>
            <style>{accordionStyles}</style>
            {currentData.map((item, index) => {
                const services = item['Services']
                    ? filterServices(item['Services'].split(','), 20)
                    : [];

                return (
                    <Accordion
                        expanded={expanded === `panel${index + 1}`}
                        onChange={handleChange(`panel${index + 1}`)}
                        key={`panel${index + 1}`}
                        className='smooth-accordion'
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index + 1}bh-content`}
                            id={`panel${index + 1}bh-header`}
                            className='smooth-summary'
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                {item.Name ?? 'Not Available'}
                            </Typography>
                            {services.length > 0 && (
                                <div>
                                    {services.slice(0, 3).map((service, index) => (
                                        <Chip
                                            key={index}
                                            label={service.trim()}
                                            size='small'
                                            style={{ margin: '0 5px 5px 0' }}
                                        />
                                    ))}
                                </div>
                            )}
                        </AccordionSummary>
                        <AccordionDetails key={`panel${index + 1}`} className='smooth-details'>
                        <ImgMediaCard item={item} setPinLocation={setPinLocation} setIsResultsPanelOpen={setIsResultsPanelOpen} setIsDrawerOpen={setIsDrawerOpen} />
                        </AccordionDetails>
                    </Accordion>
                );
            })}
            <PaginationControlled
                count={Math.ceil(data.length / ITEMS_PER_PAGE)}
                page={currentPage}
                onChange={handlePageChange}
            />
        </div>
    );
};

export default ControlledAccordions;
