import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material'

export const CustomAccordion = ({
  title,
  children,
  level,
}: {
  title: string
  children: React.ReactNode
  level?: number
}) => {
  const textSizes = ['text-3xl', 'text-2xl', 'text-xl', 'text-lg']
  const textSizeClass = textSizes[level ?? 3] || textSizes[textSizes.length - 1]
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <h2 className={`${textSizeClass} font-bold`}>{title}</h2>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  )
}
