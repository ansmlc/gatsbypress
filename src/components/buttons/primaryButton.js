import React from 'react';
import { BiRightArrowAlt } from "@react-icons/all-files/bi/BiRightArrowAlt"
import { BiLeftArrowAlt } from "@react-icons/all-files/bi/BiLeftArrowAlt"
import PropTypes from "prop-types"
import {
  Button,
} from '@chakra-ui/react';
import { LightMode } from '@chakra-ui/color-mode';

const PrimaryButton = ({ children, arrowLeft, arrowRight }) => {
return (
    <LightMode>
        <Button 
            width="100%"
            rounded={'full'}
            shadow="md"
            size={'lg'}
            fontWeight={'bold'}
            px={6}
            colorScheme={'brand'}
            rightIcon={arrowRight ? <BiRightArrowAlt /> : ''}
            leftIcon={arrowLeft ? <BiLeftArrowAlt /> : ''}
        >
            {children}
        </Button>
    </LightMode>
)
}

PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
}
  
export default PrimaryButton
  
  

