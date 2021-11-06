import React from 'react';
import { BiRightArrowAlt } from "@react-icons/all-files/bi/BiRightArrowAlt"
import PropTypes from "prop-types"
import {
  Button,
} from '@chakra-ui/react';

const PrimaryButton = ({ children }) => {
return (
<Button 
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
)
}

PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
}
  
export default PrimaryButton
  