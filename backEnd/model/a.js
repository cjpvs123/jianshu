Query.prototype.exec = function exec(op, callback) {
    const _this = this;
    // Ensure that `exec()` is the first thing that shows up in
    // the stack when cast errors happen.
    const castError = new CastError();

    if (typeof op === 'function') {
        callback = op;
        op = null;
    } else if (typeof op === 'string') {
        this.op = op;
    }

    callback = this.model.$handleCallbackError(callback);

    return promiseOrCallback(callback, (cb) => {
        cb = this.model.$wrapCallback(cb);

        if (!_this.op) {
            cb();
            return;
        }

        this._hooks.execPre('exec', this, [], (error) => {
            if (error != null) {
                return cb(_cleanCastErrorStack(castError, error));
            }
            let thunk = '_' + this.op;
            if (this.op === 'update') {
                thunk = '_execUpdate';
            } else if (this.op === 'distinct') {
                thunk = '__distinct';
            }
            this[thunk].call(this, (error, res) => {
                if (error) {
                    return cb(_cleanCastErrorStack(castError, error));
                }

                this._hooks.execPost('exec', this, [], {}, (error) => {
                    if (error) {
                        return cb(_cleanCastErrorStack(castError, error));
                    }

                    cb(null, res);
                });
            });
        });
    }, this.model.events);
};
