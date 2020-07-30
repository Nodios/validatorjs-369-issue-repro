import { decorate, action } from 'mobx';
import moment from 'moment'
import MobxForm from 'mobx-react-form';
import DVR from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';

const plugins = {
    dvr: DVR(validatorjs)
}

const fields = {
    date: {
        label: 'Date',
        type: 'date',
        rules: 'required|date',
        value: '',
        // value: moment().format('YYYY-MM-DD')
    }
}

class RootStore {
    constructor() {
        this.form = new MobxForm({
            fields
        }, {
            plugins,
            hooks: {
                onSuccess: this.onSuccess,
                onError: this.onError
            }
        });
    }

    onSuccess(form) {
        const values = form.values();
        console.log('form values', values);
    }

    onError(form) {
        const errors = form.errors();
        console.error('Error submitting form', errors);
    }
}

export default decorate(RootStore, {
    onSuccess: action.bound,
    onError: action.bound
});