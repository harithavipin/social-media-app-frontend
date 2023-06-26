import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({ modalOpened, setModalOpened }) {
    const theme = useMantineTheme();

    return (

        <Modal
            overlayColor={
                theme.colorScheme === "dark"
                    ? theme.colors.dark[9]
                    : theme.colors.gray[2]
            }
            overlayOpacity={0.55}
            overlayBlur={3}
            size='40%'

            opened={modalOpened}
            onClose={() => setModalOpened(false)
            }
        >
            <form className='infoForm authform'>
                <h3>Your Info</h3>
                <div>
                    <input
                        type='text' placeholder='First Name' className='inputname' name='first name'
                    />
                    <input type='text' placeholder='Last Name' className='inputname' name='last name' />

                </div>
                <div>
                    <input
                        type='text' placeholder='Works at' className='inputname' name='worksat' />
                </div>
                <div>
                    <input
                        type='text' placeholder='Lives In' className='inputname' name='lives in'
                    />
                    <input type='text' placeholder='Country' className='inputname' name='country' />

                </div>
                <div>
                    <input
                        type='text' placeholder='Relationship Status' className='inputname' name='status' />
                </div>
                <div>
                    Profile Image
                    <input type='file' name='profileimage' />
                    Cover Image
                    <input type='file' name='coverimage' />

                </div>
                <button className='button signupbtn '>Update</button>
            </form>
        </Modal>



    );
}
export default ProfileModal