import type { ComponentType } from 'react'

export type SlideProps = { step: number }
export type SlideDefinition = {
  number: number
  title: string
  maxStep: number
  component: ComponentType<SlideProps>
}
