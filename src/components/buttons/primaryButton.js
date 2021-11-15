import React from 'react';
import { BiRightArrowAlt } from "@react-icons/all-files/bi/BiRightArrowAlt"
import { BiLeftArrowAlt } from "@react-icons/all-files/bi/BiLeftArrowAlt"
import PropTypes from "prop-types"
import {
  Button,
} from '@chakra-ui/react';

const PrimaryButton = ({ children, arrowLeft, arrowRight }) => {
    let theButton = ""
    arrowRight?
    theButton = 
        <Button 
            minW="200px"
            rounded={'full'}
            shadow="md"
            size={'lg'}
            fontWeight={'bold'}
            px={6}
            colorScheme={'brand'}
            rightIcon={<BiRightArrowAlt />}
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
            colorScheme={'brand'}
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
            colorScheme={'brand'}
        >
           {children}
        </Button>    
return (
        theButton
)
}

PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
}
  
export default PrimaryButton
  
  

