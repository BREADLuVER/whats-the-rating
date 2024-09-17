import * as React from "react"

import { UnframerBreakpoint } from "unframer"

export interface Props {
    children?: React.ReactNode
    style?: React.CSSProperties
    className?: string
    id?: string
    width?: any
    height?: any
    layoutId?: string
    "variant"?: 'Desktop' | 'Phone' | 'Tablet'
}

const UserSurveyFramerComponent = (props: Props) => any

type VariantsMap = Partial<Record<UnframerBreakpoint, Props['variant']>> & { base: Props['variant'] }

UserSurveyFramerComponent.Responsive = (props: Omit<Props, 'variant'> & {variants: VariantsMap}) => any

export default UserSurveyFramerComponent

