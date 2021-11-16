import React from 'react';
import { BiRightArrowAlt } from "@react-icons/all-files/bi/BiRightArrowAlt"
import { BiLeftArrowAlt } from "@react-icons/all-files/bi/BiLeftArrowAlt"
import PropTypes from "prop-types"
import {
  Button,
} from '@chakra-ui/react';
import { LightMode } from '@chakra-ui/color-mode';

const PrimaryButton = ({ children, arrowLeft, arrowRight }) => {
    let theButton = ""
    arrowRight?
    theButton = 
    <LightMode>
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
    </LightMode>
    :
    arrowLeft?
    theButton =
    <LightMode>
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
    </LightMode>
    :
    theButton =
    <LightMode>
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
    </LightMode> 
return (
        theButton
)
}

PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
}
  
export default PrimaryButton
  
  

