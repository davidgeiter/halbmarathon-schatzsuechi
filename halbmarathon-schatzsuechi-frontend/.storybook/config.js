import { configure, addDecorator } from "@storybook/react"
import { withGlobalStyles } from "../src/stories/decorators"
import "typeface-cousine"

addDecorator(withGlobalStyles)

function loadStories() {
  require("../src/stories")
}

configure(loadStories, module)
