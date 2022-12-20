import { Container, Button } from '../../'

export default function Main() {
  return (
    <Container.Root>
      <Container>
        <div className='flex items-center mb-2 gap-x-2'>
          <Button size='xl'>테스트!</Button>
          <Button size='lg'>테스트!</Button>
          <Button>테스트!</Button>
          <Button size='sm'>테스트!</Button>
          <Button size='xs'>테스트!</Button>
        </div>
        <div className='flex items-center mb-2 gap-x-2'>
          <Button variant='outline' size='xl'>
            테스트!
          </Button>
          <Button variant='outline' size='lg'>
            테스트!
          </Button>
          <Button variant='outline'>테스트!</Button>
          <Button variant='outline' size='sm'>
            테스트!
          </Button>
          <Button variant='outline' size='xs'>
            테스트!
          </Button>
        </div>
        <div className='flex items-center mb-2 gap-x-2'>
          <Button variant='ghost' size='xl'>
            테스트!
          </Button>
          <Button variant='ghost' size='lg'>
            테스트!
          </Button>
          <Button variant='ghost'>테스트!</Button>
          <Button variant='ghost' size='sm'>
            테스트!
          </Button>
          <Button variant='ghost' size='xs'>
            테스트!
          </Button>
        </div>
        <div className='flex items-center mb-2 gap-x-2'>
          <Button.Group>
            <Button>테스트!</Button>
            <Button>테스트!</Button>
          </Button.Group>
        </div>
        <div className='flex items-center mb-2 gap-x-2'>
          <Button.Group>
            <Button variant='outline'>테스트!</Button>
            <Button variant='outline'>테스트!</Button>
            <Button variant='outline'>테스트!</Button>
          </Button.Group>
        </div>
        <div className='flex items-center mb-2 gap-x-2'>
          <Button.Group>
            <Button variant='ghost'>테스트!</Button>
          </Button.Group>
        </div>
      </Container>
    </Container.Root>
  )
}
