import React from 'react';
import { BiRightArrowAlt } from "@react-icons/all-files/bi/BiRightArrowAlt"
import PropTypes from "prop-types"
import {
  Button,
} from '@chakra-ui/react';

const SecondaryButton = ({ children }) => {
    return (
        <Button 
            rounded={'full'}
            shadow="lg"
            size={'lg'}
            fontWeight={'bold'}
            px={6}
            colorScheme={'red'}
            bg={'red.400'}
            _hover={{ bg: 'red.500' }}
            rightIcon={<BiRightArrowAlt />}
        >
            {children}
        </Button>
    )
}

SecondaryButton.propTypes = {
    children: PropTypes.node.isRequired,
}
  
export default SecondaryButton
  