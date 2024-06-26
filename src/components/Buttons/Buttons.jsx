import { Group, Button } from '@mantine/core';
import ChartIcon from '../../assets/icon_charts.svg';
import CreditIcon from '../../assets/icon_credit.svg';
import PlusIcon from '../../assets/icon_plus.svg';
import classes from './Buttons.module.css';

const Buttons = (props) => {
  const { type, icon, children, ...buttonProps } = props;

  const activeButtonClasses = `${classes[type]} ${classes.red}`;

  const icons = {
    chart: <img className={classes.chartGap} src={ChartIcon} alt="차트" />,
    credit: <img className={classes.creditGap} src={CreditIcon} alt="크레딧" />,
    plus: <img className={classes.plusGap} src={PlusIcon} alt="더보기" />,
  };

  const selectedIcon = icons[icon] || null;

  const BUTTONS = {
    landing: (
      <div className={classes.landingButtonWrap}>
        <Button className={activeButtonClasses} {...buttonProps}>
          {children}
        </Button>
      </div>
    ),
    donate: (
      <div className={classes.donateButtonWrap}>
        <Button className={activeButtonClasses} {...buttonProps}>
          {children}
        </Button>
      </div>
    ),
    vote: (
      <Group>
        <div className={classes.voteButtonWrap}>
          <Button
            {...buttonProps}
            className={activeButtonClasses}
            leftSection={selectedIcon}
          >
            {children}
          </Button>
        </div>
      </Group>
    ),
    more: (
      <div className={classes.moreButtonWrap}>
        <Button
          {...buttonProps}
          className={`${classes[type]} ${classes.black}`}
        >
          {children}
        </Button>
      </div>
    ),
    recharge: (
      <Group>
        <div className={classes.rechargeButtonWrap}>
          <Button
            {...buttonProps}
            className={activeButtonClasses}
            leftSection={selectedIcon}
          >
            {children}
          </Button>
        </div>
      </Group>
    ),
    modalDonate: (
      <div className={classes.modalDonateButtonWrap}>
        <Button {...buttonProps} className={`${classes[type]} ${classes.grey}`}>
          {children}
        </Button>
      </div>
    ),
    modalVote: (
      <div className={classes.modalVoteButtonWrap}>
        <Button className={activeButtonClasses} {...buttonProps}>
          {children}
        </Button>
      </div>
    ),
    confirm: (
      <div className={classes.confirmButtonWrap}>
        <Button className={activeButtonClasses} {...buttonProps}>
          {children}
        </Button>
      </div>
    ),
    add: (
      <Group>
        <div className={classes.addButtonWrap}>
          <Button
            {...buttonProps}
            className={activeButtonClasses}
            leftSection={selectedIcon}
          >
            {children}
          </Button>
        </div>
      </Group>
    ),
  };

  return BUTTONS[type];
};

export default Buttons;
