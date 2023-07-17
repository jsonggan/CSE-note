import { useEffect } from 'react';
import pagePaddingConfig from '../../data/style.json';

// redux 
import { useSelector, useDispatch } from 'react-redux';
import { onPaddingChange } from '../../redux/page-padding';
import type { RootState } from '../../redux/store';

export function usePagePadding() {
  const sidebar = useSelector((state: RootState) => state.sidebar.value)
  const dispatch = useDispatch();

  useEffect(() => {
    // using linear regression to calculate page padding
    const calculatePagePadding = () => {
      const minPadding = pagePaddingConfig['pagePadding']['minPadding'];
      const vwWhenMinPadding = pagePaddingConfig['pagePadding']['vwWhenMinPadding'];
      const parameter = pagePaddingConfig['pagePadding']['parameter'];
      var vw = window.innerWidth;
      var padding;

      // // if sidebar is active
      // if (sidebar === true){
      //   vw = vw - 300;
      // }

      if (vw < vwWhenMinPadding) {
        padding = minPadding;
      } else {
        padding = (((vw - vwWhenMinPadding) * (parameter - minPadding)) / (1000 - vwWhenMinPadding)) + minPadding;
      }
      dispatch(onPaddingChange(padding));
    };

    calculatePagePadding();
    window.addEventListener('resize', calculatePagePadding);
    return () => {
      window.removeEventListener('resize', calculatePagePadding);
    };
  }, [dispatch]);
}
