/*=============================================== Image uploader styles ===============================================*/

import styled from "styled-components"
import {
    MEDIA,
    Mixins,
    OVERLAYS,
    RADIUSES,
    TRANSITIONS,
    Icon,
} from "@julseb-lib/react"

const INPUT_SIZE = 120

export const ImageContainer = styled.div`
    width: ${INPUT_SIZE}px;
    height: ${INPUT_SIZE}px;
`

export const HoverContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${OVERLAYS.WHITE_50};
    opacity: 0;
    visibility: hidden;
    transition: ${TRANSITIONS.SHORT};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })}
`

export const StyledImageUploader = styled.button`
    width: ${INPUT_SIZE}px;
    height: ${INPUT_SIZE}px;
    position: relative;
    padding: 0;
    border: none;
    border-radius: ${RADIUSES.M};
    overflow: hidden;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })}

    @media ${MEDIA.HOVER} {
        &:hover > ${HoverContainer} {
            opacity: 1;
            visibility: visible;
        }
    }
`

export const StyledIcon = styled(Icon)`
    opacity: 0;
    visibility: hidden;

    &.Visible {
        opacity: 1;
        visibility: visible;
    }
`
