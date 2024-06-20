import * as React from 'react'
import { Box, Container, Typography } from '../../'

export default function TypographyPage() {
  return (
    <Container.Root>
      <Container className='flex flex-col gap-y-5'>
        <div>
          <h3
            id='typography-display'
            role='navigation'
            className='text-base font-bold'
          >
            Display
          </h3>
          <p className='font-mono text-xs opacity-50'>Typography.Display</p>
        </div>
        <Box
          className='mb-2 flex flex-col gap-y-4'
          padding
          rounded
          border
          shadow
        >
          <Typography.Display token='text-display1'>
            애자일웍스 Agile Works text-display1
          </Typography.Display>
          <Typography.Display token='text-display2'>
            애자일웍스 Agile Works text-display2
          </Typography.Display>
          <Typography.Display token='text-display3'>
            애자일웍스 Agile Works text-display3
          </Typography.Display>
          <Typography.Display token='text-display4'>
            애자일웍스 Agile Works text-display4
          </Typography.Display>
        </Box>
        <div>
          <h3
            id='typography-headline'
            role='navigation'
            className='text-base font-bold'
          >
            Headline
          </h3>
          <p className='font-mono text-xs opacity-50'>Typography.Headline</p>
        </div>
        <Box
          className='mb-2 flex flex-col gap-y-4'
          padding
          rounded
          border
          shadow
        >
          <Typography.Headline token='text-headline1'>
            애자일웍스 Agile Works text-headline1
          </Typography.Headline>
          <Typography.Headline token='text-headline2'>
            애자일웍스 Agile Works text-headline2
          </Typography.Headline>
        </Box>
        <div>
          <h3
            id='typography-label'
            role='navigation'
            className='text-base font-bold'
          >
            Label
          </h3>
          <p className='font-mono text-xs opacity-50'>Typography.Label</p>
        </div>
        <Box
          className='mb-2 flex flex-col gap-y-4'
          padding
          rounded
          border
          shadow
        >
          <Typography.Label token='text-label1'>
            애자일웍스 Agile Works text-label1
          </Typography.Label>
          <Typography.Label token='text-label2'>
            애자일웍스 Agile Works text-label2
          </Typography.Label>
          <Typography.Label token='text-label3'>
            애자일웍스 Agile Works text-label3
          </Typography.Label>
          <Typography.Label token='text-label4'>
            애자일웍스 Agile Works text-label4
          </Typography.Label>
        </Box>
        <div>
          <h3
            id='typography-body'
            role='navigation'
            className='text-base font-bold'
          >
            Body
          </h3>
          <p className='font-mono text-xs opacity-50'>Typography.Body</p>
        </div>
        <Box
          className='mb-2 flex flex-col gap-y-4'
          padding
          rounded
          border
          shadow
        >
          <Typography.Body token='text-body1'>
            애자일웍스 Agile Works text-body1
          </Typography.Body>
          <Typography.Body token='text-body2'>
            애자일웍스 Agile Works text-body2
          </Typography.Body>
          <Typography.Body token='text-body3'>
            애자일웍스 Agile Works text-body3
          </Typography.Body>
          <Typography.Body token='text-body4'>
            애자일웍스 Agile Works text-body4
          </Typography.Body>
          <Typography.Body token='text-body5'>
            애자일웍스 Agile Works text-body5
          </Typography.Body>
          <Typography.Body token='text-body6'>
            애자일웍스 Agile Works text-body6
          </Typography.Body>
        </Box>
      </Container>
    </Container.Root>
  )
}
