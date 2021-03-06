import * as core from '@pluralsight/ps-design-system-core'
import {
  AccountIcon,
  BrowseIcon,
  HomeIcon,
  NotificationsIcon
} from '@pluralsight/ps-design-system-icon'
import PropTypes from 'prop-types'
import * as Text from '@pluralsight/ps-design-system-text'
import NavBar from '@pluralsight/ps-design-system-navbar'
import NavBrand from '@pluralsight/ps-design-system-navbrand'
import DSNavCookieBanner from '@pluralsight/ps-design-system-navcookiebanner'
import NavItem from '@pluralsight/ps-design-system-navitem'
import NavUser from '@pluralsight/ps-design-system-navuser'
import React from 'react'

import {
  Chrome,
  Code,
  Content,
  Example,
  Intro,
  P,
  PageHeading,
  SectionHeading
} from '../../src/ui/index.js'

export default function NavPage() {
  return (
    <Chrome>
      <Content title="Form">
        <PageHeading packageName="nav">Nav</PageHeading>

        <Intro>
          The navigation components provide the building blocks for creating a
          global navigation system. These components are not a navigation
          product in itself like Prism, but will enable product organizations to
          own and operate their own global navigation while remaining consistent
          with other products in the Pluralsight family.
        </Intro>

        <P>Install one or more of the component dependencies:</P>
        <Code language="bash">
          {`npm install @pluralsight/ps-design-system-navbar 
npm install @pluralsight/ps-design-system-navbrand 
npm install @pluralsight/ps-design-system-navitem 
npm install @pluralsight/ps-design-system-navuser 
npm install @pluralsight/ps-design-system-navcookiebanner`}
        </Code>

        <P>Include the React components in your project:</P>
        <Code language="javascript">
          {`import NavBar from '@pluralsight/ps-design-system-navbar' 
import NavBrand from '@pluralsight/ps-design-system-navbrand' 
import NavItem from '@pluralsight/ps-design-system-navitem' 
import NavUser from '@pluralsight/ps-design-system-navuser' 
import NavCookieBanner from '@pluralsight/ps-design-system-navcookiebanner'`}
        </Code>

        <SectionHeading>Components</SectionHeading>
        <ComponentHeading>Nav bar</ComponentHeading>
        <P>
          The nav bar component is the container of the global navigation. It’s
          56px tall and should be fluid and sticky to the left/top/right of the
          browser viewport.
        </P>
        <Example.React
          orient="vertical"
          outputStyle={{ padding: `0 0 ${core.layout.spacingLarge} 0` }}
          includes={{
            Filler,
            NavBar
          }}
          codes={[
            `<NavBar 
  brand={<Filler>Brand</Filler>}
  items={<Filler>Items</Filler>}
  user={<Filler>User</Filler>}
  utility={<Filler>Utility</Filler>} />`
          ]}
        />

        <ComponentHeading>Nav item</ComponentHeading>
        <P>
          The nav item component is for creating links to pages or as action
          triggers. A horizontal variant can be used with or without an icon.
          The vertical variant always requires an icon. The icon-only variant
          can also be used for very recognizable icons/actions when a label is
          unecessary.
        </P>
        <Example.React
          outputStyle={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: core.layout.spacingMedium
          }}
          outputChildStyle={{
            display: 'flex',
            justifyContent: 'center',
            margin: 0
          }}
          includes={{
            HomeIcon,
            NavItem
          }}
          codes={[
            `<NavItem icon={<HomeIcon />} menu={<div>placeholder</div>}>Label</NavItem>`,
            `<NavItem icon={<HomeIcon />}>Label</NavItem>`,
            `<NavItem menu={<div>placeholder</div>}>Label</NavItem>`,
            `<NavItem>Label</NavItem>`,
            `<NavItem icon={<HomeIcon />} alignment={NavItem.alignments.vertical}>Label</NavItem>`,
            `<NavItem icon={<HomeIcon />} alignment={NavItem.alignments.vertical} menu={<div>placeholder</div>}>Label</NavItem>`,
            `<NavItem icon={<HomeIcon />} />`
          ]}
        />

        <ComponentHeading>Nav brand</ComponentHeading>
        <P>
          The nav brand component creates a consistent use of branding for the
          icon and logo of an app. It is intended to always be placed at the
          left end of the nav bar.
        </P>
        <Example.React
          includes={{
            NavBrand,
            MyLogo
          }}
          codes={[`<NavBrand logo={<MyLogo />} wordmark="TITLE" />`]}
        />

        <ComponentHeading>Nav user</ComponentHeading>
        <P>
          The nav user component is for actions & settings related to the user.
          It is intended to always be placed at the right end of the nav bar.
          For wider screens, text can be displayed for the user’s name and a
          meta item (such as a plan name) or only a name. When the screen is
          narrow, the text will be dropped.
        </P>
        <Example.React
          includes={{
            NavUser
          }}
          codes={[
            `<NavUser name="Name" meta="Meta" src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg" />`,
            `<NavUser name="Name" src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg" />`,
            `<NavUser src="https://en.gravatar.com/userimage/8399312/b15448d840afacd0eb18102baf788255.jpeg" />`
          ]}
        />

        <ComponentHeading>Nav cookie banner</ComponentHeading>
        <P>
          The nav cookie banner is common nav element that should be present on
          the page in order to comply with laws requiring notice that cookies
          are used in our product. It will be affixed to the bottom/left of the
          app frame.
        </P>
        <Example.React
          outputStyle={{ position: 'relative', minHeight: '128px', padding: 0 }}
          outputChildStyle={{ position: 'relative' }}
          includes={{
            NavCookieBanner
          }}
          codes={[`<NavCookieBanner />`]}
        />

        <SectionHeading>Guidelines</SectionHeading>
        <Text.List type={Text.List.types.bulleted}>
          <Text.List.Item>
            Always keep the navigation bar height 56px.
          </Text.List.Item>
          <Text.List.Item>
            The navigation bar should be fluid and sticky to the left/top/right
            edges of the browser viewport. This will happen automatically if you
            use the app frame component.
          </Text.List.Item>
          <Text.List.Item>
            Be prudent with the nav items and the the number you use. Try to
            keep it to about about 2-5. Organize the items well, use short yet
            descriptive labels, and use grouping with dropdown menus if you need
            more items than will fit.
          </Text.List.Item>
          <Text.List.Item>
            Use the nav brand component to provide consistency between
            experiences.
          </Text.List.Item>
          <Text.List.Item>
            Use icon only nav items when the icon clearly represents what the
            nav item is or does. Use tooltips with icon only nav items.
          </Text.List.Item>
        </Text.List>

        <SectionHeading>Reference design</SectionHeading>
        <P>
          Here are some examples of how the navigation components can be used
          together to create consistent global navigation system for your app.
        </P>
        <ReferenceDesign1 />
      </Content>
    </Chrome>
  )
}

function ComponentHeading(props) {
  return (
    <Text.Heading size={Text.Heading.sizes.medium}>
      <h3>{props.children}</h3>
    </Text.Heading>
  )
}
ComponentHeading.propTypes = {
  children: PropTypes.children
}

function MyLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="url(#paint0_linear)" />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="0"
          y1="0"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8A99A8" />
          <stop offset="1" stopColor="#576675" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function NavCookieBanner() {
  return <DSNavCookieBanner style={{ position: 'absolute' }} />
}

function Filler(props) {
  return (
    <div>
      {props.children}
      <style jsx>{`
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${core.colorsPink.base};
        height: 100%;
        border: 2px dashed ${core.colorsPink.base};
        padding: 0 ${core.layout.spacingMedium};
      `}</style>
    </div>
  )
}
Filler.propTypes = {
  children: PropTypes.node
}

function ReferenceDesign1() {
  return (
    <Example.React
      outputStyle={{ padding: `0 0 ${core.layout.spacingLarge} 0` }}
      includes={{
        AccountIcon,
        BrowseIcon,
        core,
        NavBar,
        NavBrand,
        NavItem,
        NavUser,
        NotificationsIcon,
        MyLogo
      }}
      codes={[
        `<NavBar
  brand={<NavBrand logo={<MyLogo />} wordmark="TITLE" />}
  items={
    <React.Fragment>
      <div
        style={{
          marginRight: core.layout.spacingXXSmall,
          display: 'inline-block'
        }}
      >
        <NavItem icon={<HomeIcon />}>Home</NavItem>
      </div>
      <div
        style={{
          display: 'inline-block'
        }}
      >
        <NavItem icon={<BrowseIcon />} selected>
          Browse
        </NavItem>
      </div>
    </React.Fragment>
  }
  onMobileMenuClick={() => alert('mobile click')}
  user={
    <NavUser
      name="Jake"
      planName="Accenture"
      onClick={() => alert('user click')}
    />
  }
  utility={
    <React.Fragment>
      <div
        style={{
          marginRight: core.layout.spacingXXSmall,
          display: 'inline-block'
        }}
      >
        <NavItem icon={<NotificationsIcon />} />
      </div>
      <div
        style={{
          display: 'inline-block'
        }}
      >
        <NavItem icon={<AccountIcon />} />
      </div>
    </React.Fragment>
  }
/>`
      ]}
    />
  )
}
