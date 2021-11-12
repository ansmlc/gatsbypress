import React from 'react';
import { BiRightArrowAlt } from "@react-icons/all-files/bi/BiRightArrowAlt"
import { BiLeftArrowAlt } from "@react-icons/all-files/bi/BiLeftArrowAlt"
import PropTypes from "prop-types"
import {
  Button,
} from '@chakra-ui/react';

const SecondaryButton = ({ children, arrowLeft, arrowRight }) => {
    let theButton = ""
    arrowRight?
    theButton = 
        <Button 
            rounded={'full'}
            shadow="md"
            size={'lg'}
            fontWeight={'bold'}
            px={6}
            colorScheme={'gray'}
            rightIcon={<BiRightArrowAlt />}
            textDecoration={'none'}
        >
            {children}
        </Button>
    :
    arrowLeft?
    theButton =
        <Button 
            rounded={'full'}
            shadow="md"
            size={'lg'}
            fontWeight={'bold'}
            px={6}
            colorScheme={'gray'}
            leftIcon={<BiLeftArrowAlt />}
        >
            {children}
        </Button>
    :
    theButton =
        <Button 
            rounded={'full'}
            shadow="md"
            size={'lg'}
            fontWeight={'bold'}
            px={6}
            colorScheme={'gray'}
        >
           {children}
        </Button>    
return (
        theButton
)
}

SecondaryButton.propTypes = {
    children: PropTypes.node.isRequired,
}
  
export default SecondaryButton
  