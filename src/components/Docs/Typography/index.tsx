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
          <Typography variant='display' token='text-display1'>
            애자일웍스 Agile Works text-display1
          </Typography>
          <Typography variant='display' token='text-display2'>
            애자일웍스 Agile Works text-display2
          </Typography>
          <Typography variant='display' token='text-display3'>
            애자일웍스 Agile Works text-display3
          </Typography>
          <Typography variant='display' token='text-display4'>
            애자일웍스 Agile Works text-display4
          </Typography>
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
          <Typography variant='headline' token='text-headline1'>
            애자일웍스 Agile Works text-headline1
          </Typography>
          <Typography variant='headline' token='text-headline2'>
            애자일웍스 Agile Works text-headline2
          </Typography>
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
          <Typography variant='label' token='text-label1'>
            애자일웍스 Agile Works text-label1
          </Typography>
          <Typography variant='label' token='text-label2'>
            애자일웍스 Agile Works text-label2
          </Typography>
          <Typography variant='label' token='text-label3'>
            애자일웍스 Agile Works text-label3
          </Typography>
          <Typography variant='label' token='text-label4'>
            애자일웍스 Agile Works text-label4
          </Typography>
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
          <Typography variant='body' token='text-body1'>
            애자일웍스 Agile Works text-body1
          </Typography>
          <Typography variant='body' token='text-body2'>
            애자일웍스 Agile Works text-body2
          </Typography>
          <Typography variant='body' token='text-body3'>
            애자일웍스 Agile Works text-body3
          </Typography>
          <Typography variant='body' token='text-body4'>
            애자일웍스 Agile Works text-body4
          </Typography>
          <Typography variant='body' token='text-body5'>
            애자일웍스 Agile Works text-body5
          </Typography>
          <Typography variant='body' token='text-body6'>
            애자일웍스 Agile Works text-body6
          </Typography>
        </Box>
      </Container>
    </Container.Root>
  )
}
