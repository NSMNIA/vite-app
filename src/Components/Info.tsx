import React from 'react'
import classes from '../scss/Info.module.scss';

export const Info = () => {
  return (
    <div className={classes.rdInfo}>
        <div className={classes.rdInfoBackground}></div>
        <div className={classes.rdInfoInner}>
            <div className={classes.rdContainer}>
                <div className={classes.rdInfoInnerInfo}>
                    <div className={classes.rdInfoBox}>
                        <span>
                            900
                        </span>
                        <span>
                            Transactions per sec
                        </span>
                    </div>
                    <div className={classes.rdInfoBox}>
                        <span>
                            78%
                        </span>
                        <span>
                            Users use the app
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
