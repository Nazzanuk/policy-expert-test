import './ItemForm.component.scss';

import React, {FC, useContext, useEffect, useState} from 'react';
import {Button, FormControl, Grid, InputLabel, MenuItem, Select, Snackbar, TextField} from '@material-ui/core';
import {Product, Products} from '../../Entities/Product/Product';
import {BasketContext} from '../../Context/Basket.context';
import {getProductByName, productRequiresWeight} from '../../Entities/Product/Product.helper';
import {Alert} from '@material-ui/lab';


export const ItemForm: FC = () => {
  const Basket = useContext(BasketContext);

  const [productName, setProductName] = useState<string>(Products[0].name);
  const [product, setProduct] = useState<Product>(Products[0]);
  const [weight, setWeight] = useState<number | undefined>();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setProduct(getProductByName(productName));
    setWeight(undefined);
  }, [productName, setProduct]);

  const submit = () => {
    if (productRequiresWeight(product) && !Number(weight)) {
      setOpen(true);

      return;
    }

    Basket.addItem({productName, weight});
  };

  return <>
    <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
      <Alert onClose={() => setOpen(false)} severity="error" variant="filled">
        Please specify a weight for {productName}
      </Alert>
    </Snackbar>

    <div data-component="ItemForm">
      <Grid container spacing={3}>
        <Grid item sm={8}>
          <FormControl>
            <InputLabel required>Product</InputLabel>
            <Select value={productName} onChange={(e: any) => setProductName(e.target.value)}>
              {Products.map(product => <MenuItem value={product.name}>{product.name}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={4} hidden={!productRequiresWeight(product)}>
          <TextField required={productRequiresWeight(product)}
                     disabled={!productRequiresWeight(product)}
                     label="Weight (kg)"
                     type="number"
                     value={weight}
                     onChange={(e: any) => setWeight(e.target.value)}
          />
        </Grid>
        <Grid item sm={12}>
          <Button variant="contained" color="primary" onClick={submit}>Add</Button>
        </Grid>
      </Grid>

    </div>
  </>;
};