import React from "react"
import { storiesOf, addDecorator } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { linkTo } from "@storybook/addon-links"

import { Progress } from "../components/Progress"
import { NotEnoughCash, InvalidCode, SuccessMessage } from "../pages/scan"
import { AlreadyScanned } from "../components/scan-results/AlreadyScanned"
import { Layout } from "../App"

addDecorator(story => <Layout>{story()}</Layout>)

storiesOf("Progress", module).add("default", () => <Progress />)
storiesOf("Scans", module).add("already scanned", () => <AlreadyScanned />)
