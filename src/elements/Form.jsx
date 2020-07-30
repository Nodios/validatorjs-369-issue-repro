import React from 'react';
import { inject, observer } from 'mobx-react';

import Input from './Input'

export default inject(stores => ({
    form: stores.rootStore.form
}))(observer(function ({ form }) {

    return (
        <div>
            <form onSubmit={form.onSubmit}>
                <Input field={form.$('date')} />
            </form>
        </div>
    )
}))