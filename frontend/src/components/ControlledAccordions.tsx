import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImgMediaCard from './ImgMediaCard';

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [data, setData] = React.useState<any[]>([]);

    React.useEffect(() => {
        fetch("http://localhost:8000")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div>
            {data.map((item, index) => (
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
                            {item['Organisation']}
                        </Typography>
                        <Typography sx={{ color: "text.secondary" }}>
                        {item['Category']}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails key={`panel${index + 1}`}>
                        <ImgMediaCard
                            imgURL={item.imgURL}
                            description={item.description}
                            location={item.location}
                            phoneNumber={item.phoneNumber}
                        />
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
