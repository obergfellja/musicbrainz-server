/*
 * @flow
 * Copyright (C) 2018 MetaBrainz Foundation
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import * as React from 'react';

import StatusPage from '../components/StatusPage';

type Props = {
  +message: string,
};

const ResetPasswordStatus = ({message}: Props) => (
  <StatusPage title={l('Reset Password')}>
    <p>{message}</p>
  </StatusPage>
);

export default ResetPasswordStatus;
