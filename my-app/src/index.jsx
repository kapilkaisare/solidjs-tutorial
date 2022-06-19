/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import BookShelf from './Bookshelf';

render(() => <BookShelf name="Kapil"/>, document.getElementById('root'));
