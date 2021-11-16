import React from "react"
import { IconButton, Box, Flex} from "@chakra-ui/react"
import { FaMoon } from "@react-icons/all-files/fa/FaMoon"
import { FaSun } from "@react-icons/all-files/fa/FaSun"
import { useColorMode } from "@chakra-ui/color-mode"
import { useColorModeValue } from "@chakra-ui/color-mode"

const ColorModeSwitcher = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)
    return (
    <Flex justify="flex-end">
        <IconButton
            isRound
            colorScheme={'gray'}
            aria-label="Color Mode Toggle"
            fontSize="lg"
            transform="scaleX(-1)"
            onClick={toggleColorMode}
            icon={<SwitchIcon/>}
        />
    </Flex>
    )
}
export default ColorModeSwitcher
