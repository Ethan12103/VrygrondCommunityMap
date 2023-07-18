import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImgMediaCard from './ImgMediaCard';

import { useState, useEffect } from 'react';

type ItemData = {
    Name: string;
    ["Services"]: string;
    ["Address 1"]: string;
    ["Address 2"]: string;
    ["Contact Number 1"]: string;
    ["Contact Number 2"]: string;
    ["Contact Persons"]: string;
    ["Email Address 1"]: string;
    ["Email Address 2"]: string;
    Website: string;
};

const filterServices = (services: string[], maxLength: number) => {
    return services.filter(
        (service) => service.trim().length > 0 && service.trim().length <= maxLength
    );
};

export default function ControlledAccordions() {
    const [expanded, setExpanded] = useState<string | false>(false);
    const [data, setData] = useState<ItemData[]>([]);

    useEffect(() => {
        fetch('http://localhost:8000/')
            .then(response => response.json())
            .then((data) => {
                // Convert the array of arrays into array of objects
                setData(data.map((org: any[]) => Object.fromEntries(org)))
            });
    }, []);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div>
            {data.map((item, index) => {
                // Split the services and filter out the ones with length <= 20
                const services = item["Services"]
                    ? filterServices(item["Services"].split(","), 20)
                    : [];

                return (
                    <Accordion
                        expanded={expanded === `panel${index + 1}`}
                        onChange={handleChange(`panel${index + 1}`)}
                        key={`panel${index + 1}`}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index + 1}bh-content`}
                            id={`panel${index + 1}bh-header`}
                        >
                            <Typography sx={{ width: "33%", flexShrink: 0 }}>
                                {item.Name ?? "Not Available"}
                            </Typography>
                            {services.length > 0 && (
                                <div>
                                    {services
                                        .slice(0, 3)
                                        .map((service, index) => (
                                            <Chip
                                                key={index}
                                                label={service.trim()}
                                                size="small"
                                                style={{ margin: "0 5px 5px 0" }}
                                            />
                                        ))}
                                </div>
                            )}
                        </AccordionSummary>
                        <AccordionDetails key={`panel${index + 1}`}>
                            <ImgMediaCard item={item} />
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );
}
