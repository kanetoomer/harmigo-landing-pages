import { useId } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import Container from './Container'

import { FaPlug, FaUserFriends, FaTasks } from 'react-icons/fa'

const features = [
  {
    name: 'Seamless Integration',
    summary: 'Connect with Dash, Albi, and your existing workflows effortlessly.',
    description:
      'HoneyFlow plugs directly into your restoration tools so you can keep your current workflow — while adding automation, centralized communication, and customer transparency.',
    icon: FaPlug,
  },
  {
    name: 'Customer Transparency',
    summary: 'Keep homeowners in the loop without the constant phone calls.',
    description:
      'Automated updates, shared timelines, and in-app messaging ensure homeowners always know what’s happening, building trust and reducing confusion.',
    icon: FaUserFriends,
  },
  {
    name: 'Team Accountability',
    summary: 'Give your crew clarity, alignment, and fewer missed steps.',
    description:
      'HoneyFlow’s centralized job hub keeps every note, document, and message tied to the right project, so nothing gets lost and everyone’s on the same page.',
    icon: FaTasks,
  },
]

function Feature({ feature, isActive, className, ...props }) {
  const Icon = feature.icon
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'flex items-center justify-center w-9 h-9 rounded-lg text-white',
          isActive ? 'bg-indigo-600' : 'bg-slate-500',
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-indigo-600' : 'text-slate-600',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => {
        const Icon = feature.icon
        return (
          <div key={feature.summary}>
            <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
            <div className="relative mt-10 pb-10">
              <div className="absolute -inset-x-4 top-8 bottom-0 bg-slate-200 sm:-inset-x-6" />
              <div className="relative mx-auto w-211 overflow-hidden rounded-xl bg-white shadow-lg ring-1 shadow-slate-900/5 ring-slate-500/10">
                <div className="w-full h-64 bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
                  <Icon className="text-6xl text-indigo-600" />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <TabGroup className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <TabList className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.summary}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="data-selected:not-data-focus:outline-hidden">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </TabList>
          <TabPanels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => {
                const Icon = feature.icon
                return (
                  <TabPanel
                    static
                    key={feature.summary}
                    className={clsx(
                      'px-5 transition duration-500 ease-in-out data-selected:not-data-focus:outline-hidden',
                      featureIndex !== selectedIndex && 'opacity-60',
                    )}
                    style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                    aria-hidden={featureIndex !== selectedIndex}
                  >
                    <div className="w-211 overflow-hidden rounded-xl bg-white shadow-lg ring-1 shadow-slate-900/5 ring-slate-500/10">
                      <div className="w-full h-64 bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
                        <Icon className="text-6xl text-indigo-600" />
                      </div>
                    </div>
                  </TabPanel>
                )
              })}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-slate-900/10 ring-inset" />
          </TabPanels>
        </>
      )}
    </TabGroup>
  )
}

export default function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Simplify everyday business tasks.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Because you’d probably be a little confused if we suggested you
            complicate your everyday business tasks instead.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
