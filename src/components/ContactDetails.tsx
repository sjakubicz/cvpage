import { SimpleGrid } from '@chakra-ui/react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { LuMail, LuPhone } from 'react-icons/lu'
import { profile } from '../data/profile'
import { ContactItem } from './ContactItem'
import { RevealText } from './RevealText'

export const ContactDetails: FC = () => {
    const { t } = useTranslation()

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="5">
            <ContactItem icon={<LuMail />} label={t('contact.email')}>
                <RevealText encoded={profile.contact.encodedEmail} label={t('contact.showEmail')} />
            </ContactItem>
            <ContactItem icon={<LuPhone />} label={t('contact.phone')}>
                <RevealText encoded={profile.contact.encodedPhone} label={t('contact.showPhone')} />
            </ContactItem>
        </SimpleGrid>
    )
}
