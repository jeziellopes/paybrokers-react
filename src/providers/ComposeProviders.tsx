import React from 'react'

interface IComposeProvidersProps {
  with: Array<React.ElementType>
  children: React.ReactNode
}

export const ComposeProviders = ({
  with: Providers,
  children,
}: IComposeProvidersProps) => {
  return (
    <>
      {Providers.reduce(
        (AccProviders, Provider) => (
          <Provider>{AccProviders}</Provider>
        ),
        children
      )}
    </>
  )
}
