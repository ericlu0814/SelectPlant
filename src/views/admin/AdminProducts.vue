<template>
  後台產品列表
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openModal('create')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            分類
          </th>
          <th>產品名稱</th>
          <th width="120">
            原價
          </th>
          <th width="120">
            售價
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.category }}</td>
          <td>{{ product.title }}</td>
          <td class="text-end">{{ product.origin_price }}</td>
          <td class="text-end">{{ product.price }}</td>
          <td>
            <span class="text-success" v-if="product.is_enabled
            ">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal('edit',product)">
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('delete',product)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- Modal -->
  <div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
        aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>新增產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">輸入圖片網址</label>
                  <input type="text" class="form-control"
                          placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl">
                  <img class="img-fluid" :src="tempProduct.imageUrl" alt="">
                </div>
                <div>
                  <h4>多圖設置</h4>
                  <div v-if="Array.isArray(tempProduct.imagesUrl)">
                    <template v-for="(img, key) in tempProduct?.imagesUrl" :key="key + 123">
                      <input type="text" class="form-control"
                            placeholder="請輸入圖片連結" v-model="tempProduct.imagesUrl[key]">
                      <img class="img-fluid mb-2" :src="tempProduct.imagesUrl[key]" alt="">
                    </template>
                    <button class="btn btn-outline-primary btn-sm d-block w-100 mb-1"
                      v-if="!tempProduct.imagesUrl.length ||
                      tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]"
                      @click="tempProduct.imagesUrl.push('')">
                      新增圖片
                    </button>
                    <button class="btn btn-outline-danger btn-sm d-block w-100"
                      v-else @click="tempProduct.imagesUrl.pop('')">
                      刪除圖片
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model="tempProduct.title">
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input id="category" type="text" class="form-control"
                          placeholder="請輸入分類" v-model="tempProduct.category">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input id="unit" type="text" class="form-control" placeholder="請輸入單位" v-model="tempProduct.unit">
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input id="origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價" v-model="tempProduct.origin_price">
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input id="price" type="number" min="0" class="form-control"
                          placeholder="請輸入售價" v-model="tempProduct.price">
                </div>
              </div>
              <hr>

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea id="description" type="text" class="form-control"
                          placeholder="請輸入產品描述" v-model="tempProduct.description">
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea id="description" type="text" class="form-control"
                          placeholder="請輸入說明內容" v-model="tempProduct.content">
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input id="is_enabled" class="form-check-input" type="checkbox"
                          :true-value="1" :false-value="0" v-model="tempProduct.is_enabled">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="editProduct()">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
  <div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1"
        aria-labelledby="delProductModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger"></strong> 商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delProduct()">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
</template>

<script>
import { Modal } from 'bootstrap'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
let productModal = {}
let delProductModal = {}
export default {
  data () {
    return {
      products: [],
      tempProduct: {
        imagesUrl: []
      },
      isNew: false
    }
  },
  methods: {
    checkLogin () {
      // const checkLogin = ''
      const url = `${VITE_APP_URL}api/user/check`
      this.$http.post(url)
        .then(res => {
          this.getProducts()
        })
        .catch(() => {
          window.location = './login.html'
        })
    },
    getProducts () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/products`
      this.$http.get(url)
        .then(res => {
          console.log(res)
          this.products = res.data.products
        })
    },
    openModal (status, data) {
      // productModal.show()
      console.log(status)
      if (status === 'edit') {
        const Data = { ...data }
        if (!('imagesUrl' in Data)) {
          Data.imagesUrl = []
        }
        this.tempProduct = Data
        this.isNew = 'false'
        productModal.show()
      } else if (status === 'create') {
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = 'true'
        productModal.show()
      } else if (status === 'delete') {
        this.tempProduct = { ...data }
        delProductModal.show()
      }
    },
    editProduct () {
      let url = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/product`
      let method = 'post'
      if (this.isNew === 'false') {
        url = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
        method = 'put'
      }
      console.log(url)
      console.log(method)

      this.$http[method](url, { data: this.tempProduct })
        .then(res => {
          console.log(res)
          productModal.hide()
          this.getProducts()
        })
        .catch((err) => {
          console.log(err.data.message)
          alert(err.data.message)
        })
    },
    delProduct () {
      const url = `${VITE_APP_URL}api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(url)
        .then(res => {
          this.getProducts()
          delProductModal.hide()
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith('hexToken='))
      ?.split('=')[1]
    this.$http.defaults.headers.common.Authorization = cookieValue
    this.checkLogin()
    // console.log(bootstrap)
    // productModal.show()
    productModal = new Modal('#productModal')
    delProductModal = new Modal('#delProductModal')
  }
}
</script>
