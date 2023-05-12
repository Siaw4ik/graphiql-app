import classes from './Welcome.module.css';

import { useLocaleContext } from '../../context/locale.context';
import { useAuthContext } from '../../context/auth.context';
import WelcomeLogo from './WelcomeLogo';
import WelcomeStack from './WelcomeStack';
import ButtonWithLink from '../ButtonWithLink/ButtonWithLink';
import { AUTHORIZED_LINK, NOT_AUTHORIZED_LINK } from '@/constants/links';
import { PADDING_BUTTON_TOP_BOT, PADDING_BUTTON_LEFT_RIGHT } from '@/constants/dimensions';

function Welcome() {
  const { authUser, isLoading } = useAuthContext();
  const [locale] = useLocaleContext();
  const {
    home: { h1, authLink, mainLink, aboutPlayground },
  } = locale;

  return (
    <>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>{h1}</h1>
        <section className={classes.sectionWrapper}>
          <p className={classes.about}>{aboutPlayground}</p>
        </section>
        <section className={classes.sectionWrapper}>
          <WelcomeLogo />
        </section>
        <section className={classes.sectionWrapperUnderline}>
          <div className={classes.buttonWrapper}>
            {!isLoading &&
              (authUser ? (
                <>
                  <ButtonWithLink
                    itemLink={AUTHORIZED_LINK}
                    itemText={mainLink}
                    paddingTopBottom={PADDING_BUTTON_TOP_BOT}
                    paddingLeftRight={PADDING_BUTTON_LEFT_RIGHT}
                  />
                </>
              ) : (
                <>
                  <ButtonWithLink
                    itemLink={NOT_AUTHORIZED_LINK}
                    itemText={authLink}
                    paddingTopBottom={PADDING_BUTTON_TOP_BOT}
                    paddingLeftRight={PADDING_BUTTON_LEFT_RIGHT}
                  />
                </>
              ))}
          </div>
        </section>
        <section className={classes.sectionWrapper}>
          <WelcomeStack />
        </section>
      </div>
    </>
  );
}

export default Welcome;
