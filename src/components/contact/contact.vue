<template>
    <div class="container card row">
        <div class="col-md-6 offset-md-3 col-sm-12 offset-sm-1">
            <form id="contact-form" role="form" style="display: block;" @submit.prevent="onSubmit">
                <h3 class="text-center">Contact Us</h3>
                    <div class="form-group">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            class="form-control"
                            placeholder="Email Address"
                            v-model="email"
                            required
                        />
                    </div>

                    <div class="form-group">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            class="form-control"
                            placeholder="Your Name"
                            v-model="name"
                            required
                        />
                    </div>

                    <div class="form-group">
                        <textarea
                             type="text"
                            name="message"
                            id="text"
                            class="form-control"
                            placeholder="Your message"
                            v-model="text"
                            required
                        />
                    </div>
        

        <div class="form-group">
          <button type="submit" class="btn btn-success" style="width: 100%" :disabled="isLoading">
            <i v-if="isLoading" class="fa fa-spinner fa-spin" />
            Send
          </button>
        </div>
      </form>
    </div>

    <p class="text-center">
        27 Farmhouse Road,<br>
        Nelson South,<br>
        Nelson,<br>
        7010<br><br>
        Email: egg27@egg.com<br><br>
        Ph: 03 54612345
    </p>

</div>

</template>
