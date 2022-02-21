import * as React from 'react'
import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	Heading
} from '@chakra-ui/react'
import { Link } from "react-router-dom";

type props = {
	visibility: boolean,
	onClose: () => void
}

const NavigationDrawer = (props: props) => {

  return (
		<Drawer placement="left" onClose={props.onClose} isOpen={props.visibility}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerHeader borderBottomWidth='1px'>
					Crub
					<Heading as='h6' size='xs'>
						"The Crawlers Hub"
					</Heading>
				</DrawerHeader>
				<DrawerBody>
					<Link
            style={{ display: "block", margin: "1rem 0", textDecoration: "none" }}
            to="/hub"
						onClick={props.onClose}
          >Hub</Link>
					<Link
            style={{ display: "block", margin: "1rem 0", textDecoration: "none" }}
            to="/configurations"
						onClick={props.onClose}
          >Configurations</Link>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
  )
}

export default NavigationDrawer