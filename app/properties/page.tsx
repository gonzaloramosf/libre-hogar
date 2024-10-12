import Button from '@/app/components/button'

export default function Properties() {
    return (
        <main className='flex min-h-screen p-24'>
            <div className='h-56 w-64'>
                <h3 className='text-2xl mb-2'> Buttons </h3>

                <iframe src='https://x.com' />

                <div className='h-full flex flex-row justify-between'>
                    <div className='flex flex-col justify-between'>
                        <Button
                            variant='xxs'
                            text='xx-Small'
                        />
                        <Button
                            variant='xs'
                            text='x-Small'
                        />
                        <Button
                            variant='sm'
                            text='Small'
                        />
                        <Button
                            variant='md'
                            text='Medium'
                        />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <Button
                            variant='lg'
                            text='Large'
                        />
                        <Button
                            variant='xl'
                            text='x-Large'
                        />
                        <Button
                            variant='xxl'
                            text='xx-Large'
                        />
                    </div>
                </div>
            </div>

            <div>
                {/* TODO: Modals */}
            </div>

            <div>
                {/* TODO: Menus */}
            </div>
        </main>
    )
}
