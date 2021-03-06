/*
 * @flow
 * Copyright (C) 2020 Anirudh Jain
 *
 * This file is part of MusicBrainz, the open internet music database,
 * and is licensed under the GPL version 2, or (at your option) any
 * later version: http://www.gnu.org/licenses/gpl-2.0.txt
 */

import * as React from 'react';

import EntityLink from '../../static/scripts/common/components/EntityLink';
import Diff from '../../static/scripts/edit/components/edit/Diff';
import FullChangeDiff from
  '../../static/scripts/edit/components/edit/FullChangeDiff';

type EditSeriesEdit = {
  ...EditT,
  +display_data: {
    +comment?: CompT<string>,
    +name?: CompT<string>,
    +ordering_type?: CompT<SeriesOrderingTypeT>,
    +series: SeriesT,
    +type?: CompT<SeriesTypeT>,
  },
};

const EditSeries = ({edit}: {+edit: EditSeriesEdit}) => {
  const display = edit.display_data;
  const name = display.name;
  const series = display.series;
  const comment = display.comment;
  const type = display.type;
  const oldTypeName = type?.old.name ?? '';
  const newTypeName = type?.new.name ?? '';
  const orderingType = display.ordering_type;
  const oldOrderingTypeName = orderingType?.old.name ?? '';
  const newOrderingTypeName = orderingType?.new.name ?? '';
  return (
    <table className="details edit-series">
      <tbody>
        <tr>
          <th>{addColonText(l('Series'))}</th>
          <td colSpan="2">
            <EntityLink entity={series} />
          </td>
        </tr>
        {name ? (
          <Diff
            label={addColonText(l('Name'))}
            newText={name.new}
            oldText={name.old}
            split="\s+"
          />
        ) : null}
        {comment ? (
          <Diff
            label={addColonText(l('Disambiguation'))}
            newText={comment.new}
            oldText={comment.old}
            split="\s+"
          />
        ) : null}
        {type ? (
          <FullChangeDiff
            label={addColonText(l('Type'))}
            newContent={
              newTypeName ? lp_attributes(newTypeName, 'series_type') : ''
            }
            oldContent={
              oldTypeName ? lp_attributes(oldTypeName, 'series_type') : ''
            }
          />
        ) : null}
        {orderingType ? (
          <FullChangeDiff
            label={addColonText(l('Ordering Type'))}
            newContent={
              newOrderingTypeName
                ? lp_attributes(newOrderingTypeName, 'series_ordering_type')
                : ''
            }
            oldContent={
              oldOrderingTypeName
                ? lp_attributes(oldOrderingTypeName, 'series_ordering_type')
                : ''
            }
          />
        ) : null}
      </tbody>
    </table>
  );
};

export default EditSeries;
