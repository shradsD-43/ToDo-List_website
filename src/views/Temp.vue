<template>
  <v-form>
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="First Name"
            v-model="FirstName"
            color="blue lighten-1"
            outlined
            :rules="[rules.required, rules.counter]"
            clearable
          ></v-text-field>
        </v-col>

        <v-col cols="6">
          <v-text-field
            label="Last Name"
            v-model="LastName"
            color="blue lighten-1"
            outlined
            :rules="[rules.required, rules.counter]"
            clearable
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-text-field
            label="Initial Password"
            v-model="Password"
            color="blue lighten-1"
            outlined
            type="password"
            :rules="[rules.required, rules.password]"
            clearable
          ></v-text-field>
        </v-col>

        <v-col cols="6">
          <v-text-field
            label="Email"
            v-model="Email"
            color="blue lighten-1"
            outlined
            :rules="[rules.required, rules.email]"
            clearable
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-text-field
            label="Phone No."
            v-model="PhoneNo"
            color="blue lighten-1"
            type="number"
            outlined
            :rules="[rules.required, rules.phone]"
            clearable
          ></v-text-field>
        </v-col>

        <v-col>
          <v-select
            v-model="role"
            :items="Roles"
            label="Role"
            outlined
            :rules="[rules.required]"
          ></v-select>
        </v-col>
      </v-row>

      <v-btn color="primary" class="mr-4" type="submit">Save</v-btn>
    </v-container>
  </v-form>
</template>

<script>
export default{
    data() {
      return{
        FirstName:'',
        LastName:'',
        Password:'',
        Email:'',
        PhoneNo:'',
        role:'',
        Roles: ['Admin','Employee','Other'],
        rules: {
          required: value => !!value || 'Required',
          counter: value => value.length <= 20 || 'Max 20 characters',
          password: value => {
            if (value.length < 8) return 'Password must be at least 8 characters long';
            if (!/[A-Z]/.test(value)) return 'Password must contain at least one uppercase letter';
            if (!/[a-z]/.test(value)) return 'Password must contain at least one lowercase letter';
            if (!/\d/.test(value)) return 'Password must contain at least one number';
            if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value)) return 'Password must contain at least one special character';
            return true;
          },
          phone: value => {
            const pattern = /^\d{10}$/;
            return pattern.test(value) || 'Invalid phone number. Please enter a 10-digit number.';
          },
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value) || 'Invalid e-mail';
          }
        },
      }
    },
}
</script>
